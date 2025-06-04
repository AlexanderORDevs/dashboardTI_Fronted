import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
} from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import { authorsTableData } from '@/data';
import { MdCheckCircle, MdCancel } from 'react-icons/md';

export function CreateRegister() {
  const [uatType, setUatType] = useState('landing'); // Status to control UAT Type
  const [isOpen, setIsOpen] = useState(false); // Accordion handling status
  const [cpaCpl, setCpaCpl] = useState('transfer'); // Status to control CPA/CPL
  const [nameRegister, setNameRegister] = useState(''); // Status for Name Register
  const [product, setProduct] = useState(''); // Status for Product
  const [user, setUser] = useState(''); // Estado para User

  // Handler for the change of the UAT Type
  const handleUatTypeChange = (e) => {
    setUatType(e.target.value);
  };

  // Toggle function for accordion visibility
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Function to manage the change in CPA/CPL
  const handleCpaCplChange = (e) => {
    setCpaCpl(e.target.value);
  };

  // Function to handle the change in Product and User inputs
  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  //Configuration for table
  const [landingRows, setLandingRows] = useState([
    {
      useCase: 'Carga de la página y Responsividad',
      criteria:
        'La página debe cargar en menos de 3 segundos sin errores en imágenes o videos, adaptarse bien a todos los dispositivos y tamaños de pantalla.',
      checked: null,
    },
    {
      useCase: 'Funcionalidad de formularios',
      criteria:
        'Todos los campos de los formularios deben funcionar correctamente. El formulario debe permitir la entrada de datos válidos, mostrar mensajes de error claros en caso de datos incorrectos y enviar la información exitosamente.',
      checked: null,
    },
    {
      useCase: 'CTA (Call to Action)',
      criteria:
        'Los botones de llamada a la acción deben ser visibles y funcionar adecuadamente, dirigiendo al usuario al envío exitoso. La acción esperada debe completarse sin fallos.',
      checked: null,
    },
    {
      useCase: 'Emite TCPA',
      criteria:
        'Verifica que el TCPA haya sido emitido correctamente en LeadConduit.',
      checked: null,
    },
  ]);
  const [didSelectRows, setDidSelectRows] = useState([
    {
      useCase: 'Tag con información de la campaña',
      criteria:
        'Verificar que tag del DID asignado muestre si es buffer (cantidad de segundos) o transfer y el nombre de la campaña. ',
      checked: null,
    },
    {
      useCase: 'Grabación de alerta ',
      criteria:
        'Verificar que la grabación asignada corresponda a la campaña, indicando el tipo de producto y tipo de llamada (Buffer - Transfer)',
      checked: null,
    },
    {
      useCase: 'Operatividad de DID',
      criteria:
        'Verifica que el DID asignado a la campaña/usuario esté operativo y garantizar su conectividad adecuada.',
      checked: null,
    },
    {
      useCase: 'Desborde a Call Center externo',
      criteria:
        'Verifica que el desborde de esta campaña/usuario con Call Center externo esté operativo y garantiza su conectividad adecuada.',
      checked: null,
    },
    {
      useCase: 'Tiempo límite para Drop',
      criteria:
        'Verifica que el tiempo de drop para la campaña esté configurado con un máximo de 10 segundos.',
      checked: null,
    },
    {
      useCase: 'Validar filtro de llamadas entrantes a grupos telefónicos',
      criteria:
        'Confirmar que las llamadas entrantes se filtran y dirigen al grupo correcto según los parámetros.',
      checked: null,
    },
    {
      useCase: 'Registro en Salesforce bajo el case owner correspondiente',
      criteria:
        'Confirmar que las casos en Salesforce pueden ser registros sin problema bajo el contacto correspondiente. ',
      checked: null,
    },
  ]);
  // Function to handle status change for each row (true for correct, false for incorrect)
  const handleStatusChange = (rowIndex, newStatus) => {
    if (uatType === 'landing') {
      const updatedRows = [...landingRows];
      updatedRows[rowIndex].status = newStatus;
      setLandingRows(updatedRows);
    } else {
      const updatedRows = [...didSelectRows];
      updatedRows[rowIndex].status = newStatus;
      setDidSelectRows(updatedRows);
    }
  };

  // Effect that updates the Name Register field when changing UAT Type or CPA/CPL
  useEffect(() => {
    let registerValue = '';
    if (uatType === 'landing') {
      registerValue = `${product}_${user}`;
    } else if (uatType === 'did_select') {
      // Constructs the value for did_select
      let cpaValue = '';
      if (cpaCpl === 'transfer') {
        cpaValue = 'Xfer';
      } else if (cpaCpl === 'buffer_180') {
        cpaValue = '170';
      } else if (cpaCpl === 'buffer_120') {
        cpaValue = '110';
      }
      registerValue = `${product}_${cpaValue}_${user}`;
    }
    setNameRegister(registerValue);
  }, [uatType, cpaCpl, product, user]);

  return (
    <div className="mb-8 mt-12 flex flex-col gap-12">
      <Card className="bg-gradient-to-r from-indigo-50 to-indigo-50">
        <CardHeader variant="gradient" color="gray" className="p-6">
          <Typography variant="h4" color="white">
            Create Register
          </Typography>
        </CardHeader>
        ;
        <form className=" space-y-10 rounded-xl p-8 shadow-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-6">
            {/* Test Type selector */}
            <div className="sm:col-span-3">
              <label
                htmlFor="test_type"
                className="mb-3 block text-lg font-semibold text-indigo-800"
              >
                Test Type
              </label>
              <select
                id="test_type"
                name="testType"
                className="block w-full rounded-lg border-2 border-black px-4 py-2 text-lg font-medium shadow-md"
                defaultValue="provider"
              >
                <option value="provider">Provider</option>
                <option value="client">Client</option>
              </select>
            </div>

            {/* Tester Name */}
            <div className="sm:col-span-3">
              <label
                htmlFor="tester_name"
                className="mb-3 block text-lg font-semibold text-indigo-800"
              >
                Tester Name
              </label>
              <input
                id="tester_name"
                name="tester_name"
                type="text"
                placeholder="Enter tester name"
                className="0 block w-full rounded-lg border-2 border-black  px-4 py-2 text-lg font-medium shadow-md"
              />
            </div>

            {/* User */}
            <div className="sm:col-span-3">
              <label
                htmlFor="user_name"
                className="mb-3 block text-lg font-semibold text-indigo-800"
              >
                User
              </label>
              <input
                id="user"
                name="user_name"
                type="text"
                placeholder="Enter user name"
                value={user}
                onChange={handleUserChange}
                className="block w-full rounded-lg border-2 border-black px-4 py-2 text-lg font-medium shadow-md "
              />
            </div>

            {/* Product */}
            <div className="sm:col-span-3">
              <label
                htmlFor="product_name"
                className="mb-3 block text-lg font-semibold text-indigo-800"
              >
                Product
              </label>
              <input
                id="product"
                name="product_name"
                type="text"
                placeholder="Enter product name"
                value={product}
                onChange={handleProductChange}
                className="block w-full rounded-lg border-2 border-black px-4 py-2 text-lg font-medium shadow-md "
              />
            </div>

            {/* uat Type selector */}
            <div className="sm:col-span-3">
              <label
                htmlFor="uat_type"
                className="mb-3 block text-lg font-semibold text-indigo-800"
              >
                UAT Type
              </label>
              <select
                id="uat_type"
                name="uatType"
                className="block w-full rounded-lg border-2 border-black px-4 py-2 text-lg font-medium shadow-md"
                value={uatType}
                onChange={handleUatTypeChange}
                defaultValue="client"
              >
                <option value="landing">Landing</option>
                <option value="did_select">DID</option>
              </select>
            </div>

            {/* Landing URL */}
            {uatType === 'landing' && (
              <div className="sm:col-span-3">
                <label
                  htmlFor="url_landing"
                  className="mb-3 block text-lg font-semibold text-indigo-800"
                >
                  Landing URL
                </label>
                <input
                  id="url_landing"
                  name="url_landing"
                  type="text"
                  placeholder="Enter url landing"
                  className="block w-full rounded-lg border-2 border-black px-4 py-2 text-lg font-medium shadow-md "
                />
              </div>
            )}

            {/* Domain Name */}
            {uatType === 'landing' && (
              <div className="sm:col-span-3">
                <label
                  htmlFor="domaninName"
                  className="mb-3 block text-lg font-semibold text-indigo-800"
                >
                  Domain Name
                </label>
                <input
                  id="domainName"
                  name="domain_name"
                  type="text"
                  placeholder="Enter domain name"
                  className="block w-full rounded-lg border-2 border-black px-4 py-2 text-lg font-medium shadow-md "
                />
              </div>
            )}

            {/* DID */}
            {uatType === 'did_select' && (
              <div className="sm:col-span-3">
                <label
                  htmlFor="did"
                  className="mb-3 block text-lg font-semibold text-indigo-800"
                >
                  DID
                </label>
                <input
                  id="did"
                  name="did"
                  type="text"
                  placeholder="Enter DID"
                  className="block w-full rounded-lg border-2 border-black px-4 py-2 text-lg font-medium shadow-md "
                />
              </div>
            )}
            {/* Mode */}
            {uatType === 'did_select' && (
              <div className="sm:col-span-3">
                <label
                  htmlFor="uat_type"
                  className="mb-3 block text-lg font-semibold text-indigo-800"
                >
                  Mode
                </label>
                <select
                  id="mode"
                  name="mode"
                  className="block w-full rounded-lg border-2 border-black px-4 py-2 text-lg font-medium shadow-md"
                  defaultValue="client"
                >
                  <option value="transfer">Transfer</option>
                  <option value="buffer">Buffer</option>
                </select>
              </div>
            )}

            {/* CPA/CPL */}
            {uatType === 'did_select' && (
              <div className="sm:col-span-3">
                <label
                  htmlFor="cpa_cpl"
                  className="mb-3 block text-lg font-semibold text-indigo-800"
                >
                  CPA/CPL
                </label>
                <select
                  id="cpa_cpl"
                  name="cpa_cpl"
                  value={cpaCpl}
                  onChange={handleCpaCplChange}
                  className="block w-full rounded-lg border-2 border-black px-4 py-2 text-lg font-medium shadow-md"
                  defaultValue="client"
                >
                  <option value="transfer">Transfer</option>
                  <option value="buffer_180">CPL (Buffer 180s)</option>
                  <option value="buffer_120">CPL (Buffer 120s)</option>
                </select>
              </div>
            )}

            {/* Campos fijos */}
            {uatType === 'did_select' && (
              <div className="sm:col-span-6">
                <div className="border-b-2 border-indigo-500 py-4">
                  <button
                    type="button"
                    onClick={toggleAccordion}
                    className="text-lg font-semibold text-indigo-700"
                  >
                    {isOpen
                      ? 'Hide Additional Information'
                      : 'Show Additional Information'}
                  </button>
                </div>
                {isOpen && (
                  <div className="mt-4 space-y-6 rounded-lg bg-indigo-50 p-4">
                    {/* Use grid for 3 columns */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {/* External Call */}
                      <div>
                        <label
                          htmlFor="externalCall"
                          className="block text-lg font-semibold text-indigo-800"
                        >
                          External Call Center DID
                        </label>
                        <input
                          id="externalCall"
                          name="externalCall"
                          type="text"
                          disabled
                          value="InGroup"
                          className="block w-full rounded-lg border-4 border-indigo-400 bg-gray-200 px-4 py-2 text-lg font-medium text-black shadow-md"
                        />
                      </div>

                      {/* Schedule */}
                      <div>
                        <label
                          htmlFor="schedule"
                          className="block text-lg font-semibold text-indigo-800"
                        >
                          Schedule
                        </label>
                        <input
                          id="schedule"
                          name="schedule"
                          type="text"
                          disabled
                          value="9am - 7pm EST"
                          className="block w-full rounded-lg border-4 border-indigo-400 bg-gray-200 px-4 py-2 text-lg font-medium text-black shadow-md"
                        />
                      </div>

                      {/* Filter phone group inbound */}
                      <div>
                        <label
                          htmlFor="filterPhone"
                          className="block text-lg font-semibold text-indigo-800"
                        >
                          Filter phone group inbound
                        </label>
                        <input
                          id="filterPhone"
                          name="filterPhone"
                          type="text"
                          disabled
                          value="Yes"
                          className="block w-full rounded-lg border-4 border-indigo-400 bg-gray-200 px-4 py-2 text-lg font-medium text-black shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Checklist Table */}
          <div className="rounded-lg border-4 border-indigo-400 bg-white p-6 shadow-lg">
            <h3 className="mb-4 border-b-2 border-indigo-500 pb-2 text-xl font-bold text-indigo-700">
              Checklist
            </h3>
            <table className="w-full table-auto border-collapse border border-indigo-300">
              <thead>
                <tr>
                  <th className="border border-indigo-300 bg-indigo-100 px-4 py-2 text-lg font-semibold text-indigo-900">
                    Casos de uso
                  </th>
                  <th className="border border-indigo-300 bg-indigo-100 px-4 py-2 text-center text-lg font-semibold text-indigo-900">
                    Criterios de aceptación{' '}
                  </th>
                  <th className="border border-indigo-300 bg-indigo-100 px-4 py-2 text-center text-lg font-semibold text-indigo-900">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* "landing" */}
                {uatType === 'landing' &&
                  landingRows.map((row, index) => (
                    <tr
                      key={index}
                      className="transition odd:bg-indigo-50 even:bg-indigo-100 hover:bg-indigo-200"
                    >
                      <td className="border border-indigo-300 px-4 py-3 text-base text-indigo-800">
                        {row.useCase}
                      </td>
                      <td className="border border-indigo-300 px-4 py-3 text-base text-indigo-800">
                        {row.criteria}
                      </td>
                      <td className="border border-indigo-300 px-4 py-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleStatusChange(index, true)} // Mark as correct
                          className={`text-lg ${
                            row.status === true
                              ? 'text-green-600'
                              : 'text-gray-500'
                          }`}
                        >
                          <MdCheckCircle size={24} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleStatusChange(index, false)} // Mark as incorrect
                          className={`text-lg ${
                            row.status === false
                              ? 'text-red-600'
                              : 'text-gray-500'
                          }`}
                        >
                          <MdCancel size={24} />
                        </button>
                      </td>
                    </tr>
                  ))}
                {/* "did_select" */}
                {uatType === 'did_select' &&
                  didSelectRows.map((row, index) => (
                    <tr
                      key={index}
                      className="transition odd:bg-indigo-50 even:bg-indigo-100 hover:bg-indigo-200"
                    >
                      <td className="border border-indigo-300 px-4 py-3 text-base text-indigo-800">
                        {row.useCase}
                      </td>
                      <td className="border border-indigo-300 px-4 py-3 text-base text-indigo-800">
                        {row.criteria}
                      </td>
                      <td className="border border-indigo-300 px-4 py-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleStatusChange(index, true)} // Mark as correct
                          className={`text-lg ${
                            row.status === true
                              ? 'text-green-600'
                              : 'text-gray-500'
                          }`}
                        >
                          <MdCheckCircle size={24} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleStatusChange(index, false)} // Mark as incorrect
                          className={`text-lg ${
                            row.status === false
                              ? 'text-red-600'
                              : 'text-gray-500'
                          }`}
                        >
                          <MdCancel size={24} />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-6">
            {/* Status */}
            <div className="sm:col-span-3">
              <label
                htmlFor="status"
                className="mb-3 block text-lg font-semibold text-indigo-800"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                className="block w-full rounded-lg border-2 border-black px-4 py-2 text-lg font-medium shadow-md"
                defaultValue="client"
              >
                <option value="passed ">Passed</option>
                <option value="failed  ">Failed</option>
              </select>
            </div>

            {/* Name Register */}
            <div className="sm:col-span-3">
              <label
                htmlFor="name_register"
                className="mb-3 block text-lg font-semibold text-indigo-800"
              >
                Name Register
              </label>
              <input
                id="name_register"
                name="name_register"
                type="text"
                value={nameRegister} // Muestra el valor calculado
                onChange={(e) => setNameRegister(e.target.value)} // Permite que sea editable
                className="block w-full rounded-lg border-2 border-black px-4 py-2 text-lg font-medium shadow-md "
              />
            </div>
          </div>

          {/* Observations */}
          <div className="sm:col-span-6">
            <label
              htmlFor="observations"
              className="mb-3 block text-lg font-semibold text-indigo-800"
            >
              Observations
            </label>
            <textarea
              id="observations"
              name="observations"
              rows={3}
              placeholder="Write any observations here..."
              className="block w-full resize-none rounded-lg border-2 border-black px-4 py-3 text-lg font-medium shadow-md "
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-6">
            <button
              type="button"
              className="rounded-md border-4 border-pink-400 bg-pink-100 px-6 py-3 text-lg font-semibold text-pink-900 shadow-lg transition hover:bg-pink-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md border-4 border-indigo-600 bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </form>
      </Card>
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Authorrrrs Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pb-2 pt-0">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {['author', 'function', 'status', 'employed', ''].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 px-5 py-3 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ img, name, email, job, online, date }, key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ''
                      : 'border-b border-blue-gray-50'
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar
                            src={img}
                            alt={name}
                            size="sm"
                            variant="rounded"
                          />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {job[0]}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {job[1]}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={online ? 'green' : 'blue-gray'}
                          value={online ? 'online' : 'offline'}
                          className="w-fit px-2 py-0.5 text-[11px] font-medium"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default CreateRegister;
