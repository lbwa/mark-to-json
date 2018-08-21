export interface options {
  md: string
  dest?: string // !
  extraHeader?: {
    [key: string]: any
  }
  contentKey?: string
}
