import { useUser } from '@auth0/nextjs-auth0';
import Footer from './components/Footer';
import Header from './components/Header';

const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) return <p>Please <a href="/api/auth/login"><i>Login</i> </a></p>

  return (
    user && (
      <div>
        <Header />
        <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <div className="max-w-max lg:max-w-7xl mx-auto">
            <div className="relative z-10 mb-8 md:mb-2 md:px-6">
              <div className="text-base max-w-prose lg:max-w-none">
                <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Profile</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">This is a profile page</p>
              </div>
            </div>
            <div className="relative">


              <div className="relative md:bg-white md:p-6">

                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>

              </div>
            </div>
          </div>
        </div>



        <Footer />
      </div>
    )
  );
}

export default Profile;