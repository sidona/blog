/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      title: 'IPv6 IoT Network',
      info: 'Build a full IPv6 network using MOMOTE Hardware running ContikiOS.',
      story: 'Contiki is open source software: Contiki can be freely used both in commercial and non-commercial systems and the full source code is available. Contiki provides powerful low-power Internet communication and supports fully standard IPv6 and IPv4, along with the recent low-power wireless standards: 6lowpan, RPL, CoAP. With Contikis ContikiMAC and sleepy routers, even wireless routers can be battery-operated.',
      technology: 'java',
      video_online: 'https://www.youtube.com/watch?v=Bb2Taj_VdTY',
      author: 'ion',
      project_info_type: 'prototip',
      project_info_difficulty: 'Intermediate',
      project_info_estimated_time: '4 hours'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
