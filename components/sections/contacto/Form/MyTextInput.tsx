import { ErrorMessage, useField } from "formik";

interface IProps {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  className?: string;
  [x: string]: any;
}
export const MyTextInput = ({ label, className = "", ...props }: IProps) => {
  // props: "Propiedades del input enviadas"
  // field:{ name, onBlur, onChange, value }
  // meta: {error, touched }
  const [field] = useField(props);
  return (
    <div className={`${className} flex-1`}>
      <label
        htmlFor={props.id || props.name}
        className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className="bg-gray-50 border border-gray-300 text-sm rounded-sm focus:border-vinas-brown-2 block w-full p-2.5"
      />
      <ErrorMessage
        name={props.name}
        component={"span"}
        className="block text-red-400 text-xs"
      />
    </div>
  );
};
