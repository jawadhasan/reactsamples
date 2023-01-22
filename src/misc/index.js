import CoinDesk from "./coin-desk";
import EvenCounter from "./even-counter";
import TodoApp from "./todo-app";
import ButtonCounter from "./button-counter";
import GitHubUser from "./github-user";
import Sum from "./sum";
import RefExample from "./ref-example";
import DataFlow from "../data-flow/data-flow"
import Quiz from "./quiz";
import EmailInput from "./email-input";
import ToogleImage from "./toggle-image";
import Vehicles from "../vehicles";

const Misc = () => {
    return (
        <>
            <h5>Misc Page</h5>
            <table className="table">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><CoinDesk /></td>
                        <td><GitHubUser /></td>
                    </tr>

                    <tr>
                        <td> <Sum a={4} b={5} /></td>
                        <td><ButtonCounter /></td>
                    </tr>

                    <tr>
                        <td><DataFlow /></td>
                        <td><RefExample /></td>
                    </tr>

                    <tr>
                        <td><Quiz /></td>
                        <td><EmailInput /></td>
                    </tr>

                    <tr>
                        <td><EvenCounter /></td>
                        <td><TodoApp /></td>
                    </tr>

                    <tr>
                        <td><ToogleImage /></td>
                        <td> <Vehicles /></td>
                    </tr>


                </tbody>
            </table>

        </>
    );
}

export default Misc;