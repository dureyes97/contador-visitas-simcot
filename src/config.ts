import { type ImmutableObject } from 'jimu-core'

export interface Config {
  portalUrl: string
  itemId: string
  widgetTitle: string
  siteName: string
  refreshIntervalSec: number
  showTableroStats: boolean
  tableroItemId: string
}

export type IMConfig = ImmutableObject<Config>