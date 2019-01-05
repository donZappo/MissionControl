using UnityEngine;
using System;
using System.Collections.Generic;

using MissionControl.Rules;
using MissionControl.Trigger;

namespace MissionControl.Logic {
  public class AddExtraLanceSpawnsForExtendedLancesBatch {
    public AddExtraLanceSpawnsForExtendedLancesBatch(EncounterRules encounterRules) {
      encounterRules.EncounterLogic.Add(new AddExtraLanceMembers());
      encounterRules.EncounterLogic.Add(new AddExtraLanceSpawnPoints());
    }
  }
}