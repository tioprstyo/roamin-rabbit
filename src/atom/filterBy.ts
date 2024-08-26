import { atom } from 'recoil';

export const filterByState = atom({
  key: 'filterByAtom',
  default: {
    quotaData: 'Data',
    validityDay: 'Validity (Days)',
    network: 'Network',
    speed: 'Speed',
    planType: 'Other Services',
    quotaTheteringNominal: 'Thetering',
  },
});
