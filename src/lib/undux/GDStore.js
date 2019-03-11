// @flow
import { createConnectedStore, withReduxDevtools } from 'undux'
import compose from 'lodash/fp/compose'

import withPinoLogger from './plugins/logger'
import withBalanceChange from './plugins/balanceChange.js'

type BalanceUpdate = {
  running: boolean
}

type Name = {
  fullName: string,
  valid?: boolean
}

type Account = {
  balance: string,
  entitlement: string,
  ready: false
}

export type State = {
  balanceUpdate: BalanceUpdate,
  name: Name,
  account: Account
}

const initialState: State = {
  balanceUpdate: {
    running: false
  },
  name: {
    fullName: '',
    valid: undefined
  },
  account: {
    balance: '',
    entitlement: '',
    ready: false
  }
}

export default createConnectedStore(
  initialState,
  compose(
    withBalanceChange,
    withPinoLogger,
    withReduxDevtools
  )
)
