'use client'

import { Switch } from "@/components/simpleui"
import { toggleEmpleadoActivo } from "@/lib/actions"


const genericUser = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACUCAMAAADIzWmnAAAAYFBMVEX///8AAAC9vb0PDw/4+Pje3t6Hh4f09PRqamphYWGVlZX7+/vCwsLv7+/o6Oi2trbS0tLY2NgzMzNDQ0OkpKRaWlpOTk4nJyesrKwdHR10dHSBgYEWFhY7OzvKysp7e3vcYfW6AAADcklEQVR4nO2bCbKiMBBAaQSBIPuiosL9bzmf8TsqI5i1G6ryTvAqIUlvOI7FYrFYLBshKfLedd0+LxJqlc8UbIjKM4ycy2hgBbXQlIRVd70n54qtaTWLPXxmv5bFDNhxRhHgyAJqvZG+nTUcaXtqQcerFw1Hao9WMZj7Et++Str9DjkUAUJCQ6/hUgRoyLbb49no3+2mksy4FQEyGsVCQBGA5DaPl+/FKW1M4Pj9Ynynxlf0K0HHykd3FF1GgoUMbsKON+zn5iCsCHBAdhQ71HdaXMVgJ+G4w91sV0IRwEV15H+pX9ljKsZ8MdmUEPOtSXiDsncazERR+JG5g/rU5KWUY5ljOs5nq0scMR17SUfMPHYL67iF73EL53oL9+MW3hmHSTkyTMVNxD2eVPyIXKyQOTQRrqLTSzhiV0sD8Vu8RC9DnoQdT9iKTiqaGbYpuqPwQuIvoyOaYiMn17/4087WEmf8itRfRHabZKdHBOrhVIqOM3AqDnSKTtxxKXYUdeZ/eBcOxQtxM845fUu/jmTH5Um/HAI19H3XH4Kl0ni9iv71DzH7nCdWjPSwTEjr7r95iq4miCIWCfzs8lzN6pL5a9nlCbGX5nmeUt81FotFK/EItcQMid+7Wc3YfoSxOnN7f00jcV5fX6JqWgHaVdGl7ldxVXpZWF5nQ4prGWbEmqnLE4h3Lt3D7TPeFLtlNKlrMog0QI4D/gnyxavNyGvpncRHPgBuJ8Tj48u1PhBrZxyjo/PgDJWmcr2ZByHCUhZybbgnlfEJvkym6fHOzvAspFx/a4rRfpfKaXnF4HicnlUcMbaS+hSNScr1Mecw0t88iJTov3M2MGnoy7zQS9z0hxgyA4/LaO/Y6DwvDzSfm8N8yiLPVesnmejf6ZFWZ2xuYqdHNO52akgRQF+gxtcpkqHTpWjkwNzRdWwCtcB7mVBP1VxmBIUfPS0mk8uo6X+0xKiinqMtN67Oj4b2e6CaB36jUj81GhLBZTSkiaa3WsNmp7KlHX4a1VOTG1cEUJ12Fh99E0d1mCFCcFSd3URQBFBTNBc5vqJ2aMzGEw/U4gpTScI7aimD2ZjngVrsY/4GH2lUFD3TAcWdSqWQL/HnrQxKf+smSI4qtYBU7n8jUUqVC9IvYWceKFXKfIGLw0rHviwWi8VisVgsFovFYuHkDz8GM1mb+/d5AAAAAElFTkSuQmCC"

export const CardEmpleado2 = ({ data, actions }) => (

    <div className={`
        place-self-stretch p-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-600 rounded-md shadow-md shadow-current/20
        xl:p-2 xl:grid xl:grid-cols-[2fr_3fr_1fr_1fr] xl:border-none xl:rounded-none xl:items-center xl:gap-4 xl:bg-inherit xl:dark:bg-inherit
       `}
    >

        {/* Observa el uso col-span-3  */}
        <div className="xl:col-span-3 grid grid-cols-[80px_auto] gap-2">
            <img src={genericUser} />

            <div>
                <div className="font-semibold ">{data.nombre}</div>

                <div className="text-sm text-gray-500 dark:text-gray-300">{data.cargo}</div>

                <div className="mt-2 xl:mt-0">{data.empresa}</div>

                {process.env.NODE_ENV != 'production' &&
                    <Switch
                        labelOn="Activo"
                        labelOff="Inactivo"
                        value={data.activo}
                        onChange={(value) => toggleEmpleadoActivo(data.id, value)}
                    />
                }
            </div>
        </div>

        <div className="mt-3 xl:mt-0 flex justify-end">
            {actions &&
                <div className="flex gap-1" onClick={e => e.stopPropagation()}>
                    {actions.map((Action, index) =>
                        <Action key={index} data={data} />
                    )}
                </div>
            }
        </div>
    </div>
)

