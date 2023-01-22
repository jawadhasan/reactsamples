
import { fleet } from "./fleet-data.js";
import { VehicleDataService } from './vehicle-data-service.js';
import Table from "../components/table"

const Vehicles = () => {

  const dataservice = new VehicleDataService();
  dataservice.loadData(fleet);

  //cars data
  const carsMap = dataservice.cars.map(elem => (
    {
      id: elem.id,
      license: elem.license,
      latlong: elem.latlong
    }));

  //trucks data
  const trucksMap = dataservice.trucks.map(elem => (
    {
      id: elem.id,
      license: elem.license,
      latlong: elem.latlong
    }));

    const vehicles = carsMap.concat(trucksMap);

  return (
    <div>
      <h5>Vehicles</h5>
      <Table tableData={vehicles} tableHeaders="id license latlong" />
    </div>
  );
}

export default Vehicles;

