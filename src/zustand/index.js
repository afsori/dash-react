import { create } from 'zustand'

export const useStoreZustand = create((set) => ({
  count: 0,
  increaseCount: ()=> (set((state) => ({count: state.count + 1}))),
  resetCount: ()=> (set((set) => ({count: 0})))
}))