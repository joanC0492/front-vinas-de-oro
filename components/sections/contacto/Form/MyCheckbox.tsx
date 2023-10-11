import { ErrorMessage, useField } from "formik";

interface IProps {
  label: string;
  name: string;
  className?: string;
  [x: string]: any; // Gracias a esto podemos enviar children como <option>
}
export const MyCheckbox = ({ label, className = "", ...props }: IProps) => {
  // props: "Propiedades del input enviadas"
  // field:{ name, onBlur, onChange, value }
  // meta: {error, touched }
  const [field, meta] = useField(props);
  return (
    <div className={`${className} flex-1`}>
      <input
        type="checkbox"
        {...field}
        {...props}
        className="w-4 h-4 text-vinas-brown-2 bg-gray-100 border-gray-300 rounded focus:via-vinas-brown-2/50"
      />
      <label
        htmlFor={props.id || props.name}
        className="ml-2 text-sm font-medium">
        {label}
      </label>
      <ErrorMessage
        name={props.name}
        component={"span"}
        className="flex-1 basis-full text-red-400 text-xs"
      />
    </div>
  );
};
