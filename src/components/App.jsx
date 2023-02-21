import {Routes, Route, Navigate} from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
    
  );
};
