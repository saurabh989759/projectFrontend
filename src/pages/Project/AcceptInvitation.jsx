import { acceptInvitation } from '@/redux/Project/Project.Action';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom';

const AcceptInvitation = () => {
    const dipatch=useDispatch();
    const location=useLocation();
    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get('token');
        console.log("token ",token)
        dipatch(acceptInvitation(token))
    },[location])
  return (
    <div>AcceptInvitation</div>
  )
}

export default AcceptInvitation