import { actualUser } from "../../redux/actions/auth.actions";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";

const ActualUser = () => {
  //register va a guardar las proiedades en un objeto, la vamos ejecutando en cada imput, y usamos spread por el tema del objeto, e indicamos el nombre de la propiedad donde quiero guardarlo
  const { handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lookUser = async(formData) => {
    dispatch(actualUser(formData,navigate))
  }

  return (
    <div>
        <button onClick={handleSubmit(lookUser)}>Ver Usuario Logado</button>
        <p>{localStorage.getItem("email")}</p>
    </div>
  );
}

export default ActualUser;
