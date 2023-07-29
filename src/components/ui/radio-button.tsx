import { cn } from "~/utils/cn";

export interface RadioButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  groupName: string;
  left?: boolean;
  right?: boolean;
  noBg?: boolean;
  selected?: boolean;
  outerClassName?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  groupName,
  className,
  left = false,
  right = false,
  noBg = false,
  selected, // Causes strange behavior
  outerClassName,
  children,
  ...rest
}) => {
  return (
    <label className={outerClassName}>
      <input
        type="radio"
        name={groupName}
        className="peer absolute opacity-0"
        checked={selected}
      />
      <div
        className={cn(
          `text-highlight flex flex-col items-center border-2 border-x-[1px] border-bg-main-dark p-3 peer-checked:text-bg-main-light dark:border-white dark:peer-checked:text-bg-main-dark`,
          className,
          left ? "rounded-l border-l-2" : "",
          right ? "rounded-r border-r-2" : "",
          noBg
            ? ""
            : "peer-checked:bg-highlight-light dark:peer-checked:bg-highlight-dark"
        )}
        {...rest}
      >
        {children}
      </div>
    </label>
  );
};

export default RadioButton;
