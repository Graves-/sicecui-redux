import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';

const formInitialValues = {
  Nombre: '',
  ApellidoMaterno: '',
  ApellidoPaterno: '',
  Bachillerato: '',
  CURP: '',
  CarreraId: '',
  Cuatrimestre: 1,
  Direccion: '',
  Email: '',
  Matricula: '',
  Medio: '',
  AnoInsc: '',
  MesInsc: '',
  StatusId: '',
  Telefono: '',
  Trabaja: '',
  LugarTrabaja: '',
  Turno: ''
};

const validationSchema = Yup.object().shape({
  Email: Yup.string().email('Ingresa un correo válido.').required('Campo requerido.'),
  Nombre: Yup.string().required('Campo requerido.'),
  ApellidoMaterno: Yup.string().required('Campo requerido.'),
  ApellidoPaterno: Yup.string().required('Campo requerido.'),
});

export class FormPage extends Component {
  render() {
    return (
      <Formik
        initialValues={formInitialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={validationSchema}>
        {props => {
          const { values, errors, dirty, isSubmitting, handleChange, handleSubmit, handleReset } = props;
          return (
            <form onSubmit={handleSubmit} style={{display: 'flex'}}>
              <div style={{flexDirecion: 'column'}}>
                <TextField id="Nombre" label="Nombre" value={values.Nombre} onChange={handleChange} margin="normal"
                           InputLabelProps={{ shrink: true }} error={!!errors.Nombre} fullWidth />

                <TextField id="ApellidoPaterno" label="ApellidoPaterno" value={values.ApellidoPaterno}
                           onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }}
                           error={!!errors.ApellidoPaterno} fullWidth />

                <TextField id="ApellidoMaterno" label="ApellidoMaterno" value={values.ApellidoMaterno}
                           onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }}
                           error={!!errors.ApellidoMaterno} fullWidth />

                <TextField id="Email" label="Email" value={values.Email} onChange={handleChange} margin="normal"
                           InputLabelProps={{ shrink: true }} error={!!errors.Email} fullWidth />

                <Button type="button" onClick={handleReset} variant="contained" disabled={!dirty || isSubmitting}>
                  Reiniciar
                </Button>
                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>Registrar</Button>
              </div>






            </form>
          );
        }}
      </Formik>
    );
  }
}

export default FormPage;