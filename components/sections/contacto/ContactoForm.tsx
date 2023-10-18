import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput, MyTextarea } from "./Form";
import { useState } from "react";

interface IProps {
  className?: string;
}

interface IFormValues {
  nombre: string;
  apellido: string;
  direccion: string;
  pais: string;
  telefono: string;
  email: string;
  area: string;
  mensaje: string;
  privacidad: boolean;
  novedades: boolean;
}
const initialValues: IFormValues = {
  nombre: "",
  apellido: "",
  direccion: "",
  pais: "",
  telefono: "",
  email: "",
  area: "",
  mensaje: "",
  privacidad: false,
  novedades: false,
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ContactoForm = ({ className = "" }: IProps) => {
  const [alert, setAlert] = useState<boolean>(false);

  if (alert === true) {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }

  return (
    <div className={className}>
      <div className="container">
        <div className="grid grid-cols-12 gap-x-4 px-4">
          <div className="lg:col-start-2 xl:col-start-3 2xl:col-start-4 | col-span-12 lg:col-span-10 xl:col-span-8 2xl:col-span-6">
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { resetForm }) => {                
                setAlert(true);
                resetForm();
              }}
              validationSchema={Yup.object({
                nombre: Yup.string()
                  .min(2, "Debe tener 2 caracteres como mínimo")
                  .max(20, "Debe tener 20 caracteres como máximo")
                  .required("Requerido"),
                apellido: Yup.string()
                  .min(2, "Debe tener 2 caracteres como mínimo")
                  .max(20, "Debe tener 20 caracteres como máximo")
                  .required("Requerido"),
                direccion: Yup.string()
                  .max(250, "Debe tener 250 caracteres como máximo")
                  .required("Requerido"),
                pais: Yup.string()
                  .max(20, "Debe tener 20 caracteres como máximo")
                  .required("Requerido"),
                telefono: Yup.string()
                  .matches(phoneRegExp, "El número de teléfono no es válido")
                  .required("Requerido"),
                email: Yup.string()
                  .email("Debe ser un correo válido")
                  .required("Requerido"),
                area: Yup.string().required("Requerido"),
                mensaje: Yup.string()
                  .max(250, "Debe tener 250 caracteres como máximo")
                  .required("Requerido"),
                privacidad: Yup.boolean().oneOf(
                  [true],
                  "Debe aceptar las condiciones"
                ),
                novedades: Yup.boolean().oneOf(
                  [true],
                  "Debe aceptar las condiciones"
                ),
              })}>
              {(formik) => (
                <Form className="space-y-6">
                  <div className="flex gap-6">
                    <MyTextInput label="Nombre:" name="nombre" id="nombre" />
                    <MyTextInput
                      label="Apellidos:"
                      name="apellido"
                      id="apellido"
                    />
                  </div>
                  <MyTextInput
                    label="Dirección:"
                    name="direccion"
                    id="direccion"
                  />
                  <div className="flex gap-6">
                    <MyTextInput label="País:" name="pais" id="pais" />
                    <MyTextInput
                      label="Teléfono / Celular:"
                      name="telefono"
                      id="telefono"
                    />
                  </div>
                  <div className="flex gap-6">
                    <MyTextInput
                      label="Email:"
                      name="email"
                      id="email"
                      type="email"
                    />
                    <MySelect label="Dirigido a:" name="area" id="area">
                      <option value="">Seleccione un Area</option>
                      <option value="AV">Área de ventas</option>
                      <option value="AM">Área de marketing</option>
                    </MySelect>
                  </div>
                  <MyTextarea label="Mensaje:" name="mensaje" id="mensaje" />
                  <div>
                    <MyCheckbox
                      label="He leido y acepto la política de privacidad"
                      name="privacidad"
                      id="privacidad"
                      className="flex flex-wrap items-center mb-2"
                      checked={formik.values.privacidad}
                    />
                    <MyCheckbox
                      label="Deseo recibir mayor información y novedades"
                      name="novedades"
                      id="novedades"
                      className="flex flex-wrap items-center mb-2"
                      checked={formik.values.novedades}
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-vinas-brown-2 hover:bg-vinas-brown-2/80 transition-colors duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full px-5 py-2.5 text-center">
                    ENVIAR
                  </button>
                  {alert && (
                    <span className="block py-2 px-3 rounded-sm bg-[#d4edda] text-[#155724]">
                      Formulario enviado correctamente
                    </span>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};