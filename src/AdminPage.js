import React from "react";
import TimerControl from "./TimerControl";
import TeamTable from "./TeamTable";

function AdminPage() {
  return (
    <div>
    <div className='container'>
      <TimerControl />
      <TeamTable />
    </div>
    </div>
  );

}

export default AdminPage;
