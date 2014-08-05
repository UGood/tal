/**
 * @fileOverview Requirejs module containing device modifier to launch native external media players
 *
 * @preserve Copyright (c) 2014 British Broadcasting Corporation
 * (http://www.bbc.co.uk) and TAL Contributors (1)
 *
 * (1) TAL Contributors are listed in the AUTHORS file and at
 *     https://github.com/fmtvp/TAL/AUTHORS - please extend this file,
 *     not this notice.
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * All rights reserved
 * Please contact us for an alternative licence
 */

require.def(
    'antie/devices/media/mediaplayerinterface',
    [
        'antie/class'
    ],
    function(Class) {
        var MediaPlayerInterface = Class.extend({

            /**
             * @param mediaType "audio" or "video"
             * @param eventCallback Function to which events are passed (e.g. to be bubbled up the component hierarchy).
             */
            init: function(mediaType, eventCallback){
            },
        });

//        MediaPlayerInterface.STATE_ = 0;

//        MediaPlayerInterface.ERROR_ = 0;

        return MediaPlayerInterface;
    }
);
