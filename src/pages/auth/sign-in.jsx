import { Input, Button, Typography } from '@material-tailwind/react';
import { useState, useContext } from 'react';
import { login as loginService } from '../../services/users/login';
import { AuthContext } from '../../context/loginContext';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, token } = await loginService(email, password);
      login(user, token);
      navigate('/dashboard/uatRecords'); // redireccion
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <section className="flex p-4">
      <div className="mt-24 w-full lg:w-3/5">
        <div className="text-center">
          <Typography variant="h2" className="mb-4 font-bold">
            Sign In
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your email and password to Sign In.
          </Typography>
        </div>
        <form
          className="mx-auto mb-2 mt-8 w-80 max-w-screen-lg lg:w-1/2"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your email
            </Typography>
            <Input
              size="lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@imediagroup360.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              required
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              required
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Sign In
          </Button>
        </form>
      </div>
      <div className="hidden h-full w-3/5 lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}

export default SignIn;
