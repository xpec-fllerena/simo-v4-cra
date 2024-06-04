import { RuleProperties } from "json-rules-engine"

export interface IAuth {
  user: ILoginInformation | null
  optionsMenuAccess: Array<IOptionsAccess>
  error: string | any
  loading: boolean
}

export interface IOptionsAccess {
  statusOrder: any
  optionCount?: number
}

export interface ILoginInformation {
  id: string
  email: string
  groups: Array<IUserGroups>
  mainGroup: {
    id: string
    name: string
  }
  name: string
  role: string
  token: string
  currentSources: Array<string>
  permission: Array<IUserPermission>
  rolePermissions: Array<any>
}

export interface IUserGroups {
  id: string
  mainGroup: string
}

export interface IUserPermission {
  id: string
  expectedFacts: Array<string>
  rule: RuleProperties
}