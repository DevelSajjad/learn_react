import Home from "../components/Home";
import {connect} from 'react-redux';
import { addToCart } from "../services/action/action";

const mapDispatchToProps=(dispatch)=>({
    addCartHandler:(data)=>dispatch(addToCart(data))
});

const mapStateToProps=(state)=>({

});
export default connect(mapStateToProps, mapDispatchToProps) (Home);