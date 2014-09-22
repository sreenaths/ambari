/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Slider config-property (see Ambari-Admin view-settings)
 * Also see <code>view.xml</code>
 * @type {DS.Model}
 */
App.SliderConfig = DS.Model.extend({

  /**
   * Name in the Ambari-Admin
   * @type {string}
   */
  viewConfigName: DS.attr('string'),

  /**
   * Shown name
   * @type {string}
   */
  displayName: DS.attr('string'),

  /**
   * @type {null|string}
   */
  value: null,

  /**
   * Is property required
   * @type {bool}
   */
  required: DS.attr('bool'),

  /**
   * If provided config has not-false value current config shouldn't be empty
   * @type {App.SliderConfig}
   */
  requireDependsOn: DS.belongsTo('sliderConfig')

});

App.SliderConfig.FIXTURES = [];
