import {List, ListItem} from '../components/mui';
import {NavLink} from 'react-router-dom';
import {
  ArrowPathIcon,
  BoltIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  HeartIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/solid';
import {useSelector} from 'react-redux';

function DashboardList() {
  const {currentUser} = useSelector((state: any) => state.user);

  return (
    <div>
      <List className='p-4 text-dashboard-text'>
        <NavLink className={({isActive}) => (isActive ? 'bg-red-800 font-semibold text-white' : 'undifined')} to='/'>
          <ListItem className='mb-1  hover:rounded-lg hover:bg-dashboard-hover hover:px-2'>
            <BoltIcon className='h-5 w-5' />
            <p className='font-inter mx-1 text-sm'>Proxy List</p>
          </ListItem>
        </NavLink>
        <NavLink
          className={({isActive}) => (isActive ? 'font-semibold text-white' : 'undifined')}
          to='/dashboard/todayList'
        >
          <ListItem className='mb-1 hover:rounded-lg hover:bg-dashboard-hover hover:px-2'>
            <ArrowPathIcon className='h-5 w-5' />
            <p className='font-inter mx-1 text-sm'>Today List</p>
          </ListItem>
        </NavLink>
        <NavLink
          className={({isActive}) => (isActive ? 'font-semibold text-white' : 'undifined')}
          to='/dashboard/favouriteList'
        >
          <ListItem className='mb-1 hover:rounded-lg hover:bg-dashboard-hover hover:px-2'>
            <HeartIcon className='h-5 w-5' />
            <p className='font-inter mx-1 text-sm'>Favourite List</p>
          </ListItem>
        </NavLink>
        {currentUser.role === 'admin' ? (
          <div>
            <NavLink
              className={({isActive}) => (isActive ? 'font-semibold text-white' : 'undifined')}
              to='/dashboard/provider'
            >
              <ListItem className='mb-1 hover:rounded-lg hover:bg-dashboard-hover hover:px-2'>
                <Cog6ToothIcon className='h-5 w-5' />
                <p className='font-inter mx-1 text-sm'>Provider</p>
              </ListItem>
            </NavLink>
            <NavLink
              className={({isActive}) => (isActive ? 'font-semibold text-white' : 'undifined')}
              to='/dashboard/identity'
            >
              <ListItem className='mb-1 hover:rounded-lg hover:bg-dashboard-hover hover:px-2'>
                <FingerPrintIcon className='h-5 w-5' />
                <p className='font-inter mx-1 text-sm'>Identity</p>
              </ListItem>
            </NavLink>
            <NavLink
              className={({isActive}) => (isActive ? 'font-semibold text-white' : 'undifined')}
              to='/dashboard/acl'
            >
              <ListItem className='mb-1 hover:rounded-lg hover:bg-dashboard-hover hover:px-2'>
                <HandRaisedIcon className='h-5 w-5' />
                <p className='font-inter mx-1 text-sm'>ACL</p>
              </ListItem>
            </NavLink>
          </div>
        ) : null}
      </List>
    </div>
  );
}

export default DashboardList;
