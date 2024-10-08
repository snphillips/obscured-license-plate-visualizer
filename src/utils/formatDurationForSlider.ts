import pluralize from 'pluralize';
// import { ComplaintType } from '../types';
// import { calcTimeToResolveComplaintInMilliSeconds } from './calcTimeToResolveComplaintInMilliSeconds';
import { formatDuration } from './formatDuration';

export const formatDurationForSlider = (timeDiffInMilliseconds: number): string => {
  // First format the time difference into days, hours and minutes
  const { days, hours, minutes } = formatDuration(timeDiffInMilliseconds);

  // If the issue is resolved in less than 1 minute,
  // display one minute
  if (days === 0 && hours === 0 && minutes < 1) {
    return `1 min`;
  }

  // If the issue is resolved in less than 1 hour,
  // display only the minutes
  if (days === 0 && hours === 0) {
    return `${minutes} ${pluralize('min', minutes)}`;
  }

  // If the issue is resolved in less than 1 day,
  // display only the hours & minutes
  if (days === 0 && hours > 0 && minutes > 0) {
    return `${minutes} ${pluralize('min', minutes)}`;
  }

  // If the issue is resolved in 1 day or more,
  // display just the day
  if (days > 0) {
    return `${days} ${pluralize('day', days)} `;

    // Otherwise,
    // display the day and hours
  } else {
    return `${days} ${pluralize('day', days)} ${hours} ${pluralize('hour', hours)}`;
  }
};
