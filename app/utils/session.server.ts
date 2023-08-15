// app/services/session.server.ts
import {createCookieSessionStorage, Session} from "@remix-run/node";

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
    cookie: {
        name: '_session', // use any name you want here
        sameSite: 'lax', // this helps with CSRF
        path: '/', // remember to add this so the cookie will work in all routes
        httpOnly: true, // for security reasons, make this cookie http only
        secrets: ['s3cr3t'], // replace this with an actual secret
        // secure: process.env.NODE_ENV === 'production', // enable this in prod only
        // maxAge: 30,
    },
});
export async function commitSession(session: Session) {
    return sessionStorage.commitSession(session);
}

export function setToastMessage(session: Session, message: string | object) {
    session.flash('toastMessage', JSON.stringify(message));
}
// you can also export the methods individually for your own usage
export let { getSession, destroySession } = sessionStorage;
