import React from 'react';
const ErrorPag=(props)=>(
<section className="container">
     <div className="card">
         <p className="text-align">{props.children}</p>
     </div>
</section>);
export default ErrorPag;