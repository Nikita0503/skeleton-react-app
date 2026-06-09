// ==============================================
// Example Date Picker (react-day-picker)
// Lightweight calendar component for selecting dates.
// You provide all the styling via SCSS Modules.
//
// Copy this folder as a template when creating date pickers.
// ==============================================

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import styles from './ExampleDatePicker.module.scss';

type ExampleDatePickerProps = {
  selected?: Date;
  onSelect: (date: Date | undefined) => void;
};

export const ExampleDatePicker = ({ selected, onSelect }: ExampleDatePickerProps) => {
  return (
    <div className={styles.wrapper}>
      <DayPicker mode="single" selected={selected} onSelect={onSelect} />
    </div>
  );
};
