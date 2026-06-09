// ==============================================
// Example Select (Radix Select)
// Radix gives behavior: keyboard navigation, typeahead, positioning, portal.
// You provide all the styling via SCSS Modules.
//
// Copy this folder as a template when creating new select dropdowns.
// ==============================================

import * as Select from '@radix-ui/react-select';
import styles from './ExampleSelect.module.scss';

type Option = {
  value: string;
  label: string;
};

type ExampleSelectProps = {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const ExampleSelect = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
}: ExampleSelectProps) => {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger className={styles.trigger}>
        <Select.Value placeholder={placeholder} />
        <Select.Icon className={styles.icon}>▾</Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={styles.content} position="popper" sideOffset={4}>
          <Select.Viewport>
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value} className={styles.item}>
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
