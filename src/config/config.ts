type StageName = 'local' | 'alpha' | 'prod';

type ConfigSchema = Record<StageName, {
    apiUrl: string;
    userUrl: string;
    adminUrl: string;
}>;

const configData: ConfigSchema = {
    local: {
        apiUrl: 'https://ln2npaai4i.execute-api.us-east-1.amazonaws.com/alpha',
        userUrl: 'http://localhost:5173',
        adminUrl: 'http://localhost:3000'
    },
    alpha: {
        apiUrl: 'https://ln2npaai4i.execute-api.us-east-1.amazonaws.com/alpha',
        userUrl: 'https://main.d1vos4qfjhiyoz.amplifyapp.com',
        adminUrl: 'https://main.d2amgi1rm0yth4.amplifyapp.com'
    },
    prod: {
        apiUrl: 'https://pcj8zmeleh.execute-api.us-east-1.amazonaws.com/prod',
        userUrl: 'https://app.us.prod.wazopulse.com',
        adminUrl: 'https://admin.app.us.prod.wazopulse.com'
    }
};

export const EnvConfig = configData[import.meta.env.VITE_STAGE_NAME as StageName];
