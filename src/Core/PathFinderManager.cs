using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;

using BattleTech;
using HBS.Collections;

namespace MissionControl {
  public class PathFinderManager {
    private static PathFinderManager instance;
    public static PathFinderManager Instance {
      get {
        if (instance == null) instance = new PathFinderManager();
        return instance;
      }
    }

    private Mech pathFinderMech;

    private PathFinderManager() {
      Init();
    }

    public void Init() {
      pathFinderMech = CreatePathFinderMech();
    }

    private Mech CreatePathFinderMech() {
      GameInstance game = UnityGameInstance.BattleTechGame;
      CombatGameState combatState = game.Combat;
      string spawnerId = Guid.NewGuid().ToString();
      string uniqueId = $"{spawnerId}.9999999999";
      
      HeraldryDef heraldryDef = null;
      combatState.DataManager.Heraldries.TryGet(HeraldryDef.HeraldyrDef_SinglePlayerSkirmishPlayer1, out heraldryDef);

      MechDef mechDef = null;
      combatState.DataManager.MechDefs.TryGet("mechdef_spider_SDR-5V", out mechDef);

      PilotDef pilot = game.Simulation.Commander.pilotDef;
      Mech mech = new Mech(mechDef, pilot, new TagSet(), uniqueId, combatState, spawnerId, heraldryDef);
      return mech;
    }

    public void RequestPathFinderMech() {
      Main.Logger.Log("[PathFinderManager] Requesting path finder mech");
      if (pathFinderMech == null) Init();
      UnityGameInstance.BattleTechGame.DataManager.RequestNewResource(BattleTechResourceType.Prefab, pathFinderMech.MechDef.Chassis.PrefabIdentifier, null);
      UnityGameInstance.BattleTechGame.DataManager.ProcessRequests();
    }

    public bool IsSpawnValid(Vector3 position, Vector3 validityPosition) {
      if (pathFinderMech.GameRep == null) {
        CombatGameState combat = UnityGameInstance.BattleTechGame.Combat;
        pathFinderMech.Init(position, 0, pathFinderMech.thisUnitChecksEncounterCells);
        pathFinderMech.InitGameRep(null);
      } else {
        pathFinderMech.CurrentPosition = position;
        pathFinderMech.GameRep.transform.position = position;
        pathFinderMech.ResetPathing(false);
      }

      try {
        List<Vector3> path = DynamicLongRangePathfinder.GetDynamicPathToDestination(validityPosition, 9999f, pathFinderMech, true, new List<AbstractActor>(), pathFinderMech.Pathing.CurrentGrid, 50f);
        if (path != null && path.Count > 3) return true;
      } catch (Exception) {
        Main.Logger.LogWarning($"[IsSpawnValid] Array out of bounds detected in the path finding code. Flagging as invalid spawn. Select a new spawn point.");
      }

      return false;
    }

    public void Reset() {
      GameObject pathFinderGo = pathFinderMech.GameRep.gameObject;
      if (pathFinderGo) GameObject.Destroy(pathFinderGo);
    }
  }
}