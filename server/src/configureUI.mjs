/*
* Copyright 2021 Comcast Cable Communications Management, LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
* SPDX-License-Identifier: Apache-2.0
*/

// Configure UI routes

'use strict';

import * as userUi from './routes/ui/user.mjs';
import * as apiUi from './routes/ui/api.mjs';

function configureUI(app) {

	// =============================== User Routes ============================

	// List users page
	app.get('/users', userUi.listUsers);

	// Add user page
  	app.get('/users/add', userUi.addUser);

  	// Remove user page
  	app.get('/users/remove', userUi.removeUser);

	// =============================== User Routes ============================

	// List users page
	app.get('/api-cheat-sheet', apiUi.apiCheatSheet);

}

export { configureUI };
