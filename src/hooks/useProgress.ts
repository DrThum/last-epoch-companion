import { useState, useEffect } from 'react'

export interface BlessingEntry {
  acquired: boolean
  selectedOption: string  // blessing name chosen by user
  roll: string            // user-entered roll value e.g. "35"
}

export interface TrackerState {
  normalCleared: Record<string, boolean>     // timelineId → cleared
  empoweredCleared: Record<string, boolean>  // timelineId → cleared
  milestones: Record<string, boolean>        // milestoneId → done
  blessings: Record<string, BlessingEntry>   // timelineId → entry
}

const STORAGE_KEY = 'le-progression-v1'

const defaultState: TrackerState = {
  normalCleared: {},
  empoweredCleared: {},
  milestones: {},
  blessings: {},
}

export function useProgress() {
  const [state, setState] = useState<TrackerState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        return { ...defaultState, ...JSON.parse(saved) }
      }
    } catch {
      // ignore parse errors
    }
    return defaultState
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  function toggleNormal(timelineId: string) {
    setState(s => ({
      ...s,
      normalCleared: { ...s.normalCleared, [timelineId]: !s.normalCleared[timelineId] },
    }))
  }

  function toggleEmpowered(timelineId: string) {
    setState(s => ({
      ...s,
      empoweredCleared: { ...s.empoweredCleared, [timelineId]: !s.empoweredCleared[timelineId] },
    }))
  }

  function toggleMilestone(id: string) {
    setState(s => ({
      ...s,
      milestones: { ...s.milestones, [id]: !s.milestones[id] },
    }))
  }

  function updateBlessing(timelineId: string, patch: Partial<BlessingEntry>) {
    setState(s => {
      const current: BlessingEntry = s.blessings[timelineId] ?? {
        acquired: false,
        selectedOption: '',
        roll: '',
      }
      return {
        ...s,
        blessings: {
          ...s.blessings,
          [timelineId]: { ...current, ...patch },
        },
      }
    })
  }

  function resetAll() {
    setState(defaultState)
    localStorage.removeItem(STORAGE_KEY)
  }

  return { state, toggleNormal, toggleEmpowered, toggleMilestone, updateBlessing, resetAll }
}
