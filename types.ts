export const widgetTypes = ['one', 'two', 'three', 'four'] as const
export type IWidgetType = typeof widgetTypes[number]

export const widgetPositionsList = {
  'top-left': 'Top Left',
  'top-right': 'Top Right',
  'bottom-right': 'Bottom Right',
  'bottom-left': 'Bottom Left',
  'middle-left': 'Middle Left',
  'middle-right': 'Middle Right',
} as const
export const widgetPositions = Object.keys(widgetPositionsList)
export type IWidgetPosition = typeof widgetPositions[number]

export const defaultPosition: IWidgetPosition = 'top-left'

export interface IWidgetOptions {
  type: IWidgetType
  position: IWidgetPosition
}
