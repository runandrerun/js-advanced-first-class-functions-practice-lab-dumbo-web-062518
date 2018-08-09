// Code your solution in this file!

const logDriverNames = (drivers) => {
  drivers.forEach( (driver) => {console.log(driver.name)});
};

const logDriversByHometown = (drivers, hometown) => {
  drivers.forEach( function(driver){
   if(driver.hometown === hometown){
    return console.log(driver.name);
  }
  })
};

const driversByRevenue = (drivers) => {
  let newDrivers = drivers.slice();
  return newDrivers.sort((driver1, driver2) => {
    return driver1.revenue - driver2.revenue;
  })
};

const driversByName = (drivers) => {
  let newDrivers = drivers.slice();
  return newDrivers.sort((driver1, driver2) => {
    return driver1.name.localeCompare(driver2.name);
  })
};

const totalRevenue = (drivers) => {
  let total = 0;
  return drivers.reduce((total, driverRev) => {
    return total + driverRev.revenue;
  }, 0)
};

const averageRevenue = (drivers) => {
  let total = totalRevenue(drivers);
  return total / drivers.length;
};
