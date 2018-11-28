using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;

using BattleTech;

namespace MissionControl.Logic {
  public abstract class ChunkLogic : LogicBlock {
    public struct ProgressFormat {
      public static string NUMBER_OF_UNITS_TO_DEFEND_REMAINING = "[numberOfUnitsToDefendRemaining]";
      public static string NUMBER_OF_UNITS_TO_DEFEND = "[numberOfUnitsToDefend]";
      public static string DURATION_REMAINING = "[durationRemaining]";
      public static string DURATION_TO_OCCUPY = "[durationToOccupy]";
      public static string PERCENTAGE_COMPLETE = "[percentageComplete]";
      public static string PLURAL_DURATION_TYPE = "[pluralDurationType]";  // Round(s) or Phase(s)
    }

    public static string DIALOGUE_ADDITIONAL_LANCE_ALLY_START_GUID = "47647e3c-a82d-4946-a601-b7dddbb63452";

    public ChunkLogic() {
      this.Type = LogicType.ENCOUNTER_MANIPULATION;
    }
  }
}