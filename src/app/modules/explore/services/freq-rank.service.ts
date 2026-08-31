import { Service } from '@angular/core';

@Service()
export class FreqRankService {

  getFreqRankSuffix(freqRank: number) {
    const lastFreqNumeral = parseInt(freqRank.toString().slice(-1));

    if (freqRank < 10 || freqRank > 20) {
      if (lastFreqNumeral == 1) {
        return "st";
      }
      else if (lastFreqNumeral == 2) {
        return "nd";
      }
      else if (lastFreqNumeral == 3) {
        return "rd";
      }
    }

    return "th";
  }
}
