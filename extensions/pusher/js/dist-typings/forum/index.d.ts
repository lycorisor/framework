import * as PusherTypes from 'pusher-js';
export type PusherBinding = {
    channels: {
        main: PusherTypes.Channel;
        user: PusherTypes.Channel | null;
    };
    pusher: PusherTypes.default;
};
