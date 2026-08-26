import Link from "next/link";

export function ListaComponentes() {
    return (
        <div className="flex flex-col text-xs md:text-base md:pl-4">
            <div className="font-bold mt-4"> MENSAJES y SEPARADORES </div>
            <Link href="/componentes#alert" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Alert</Link>
            <Link href="/componentes#alertsmall" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Alert small</Link>
            <Link href="/componentes#badge" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Badge</Link>
            <Link href="/componentes#space" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Space</Link>
            <Link href="/componentes#separator" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Separator</Link>


            <div className="font-bold mt-4">ESPERAS</div>
            <Link href="/componentes#skeleton" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Skeleton</Link>
            <Link href="/componentes#spinner" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Spinner</Link>


            <div className="font-bold mt-4">CUADROS EMERGENTES</div>
            <Link href="/componentes#tooltip" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Tooltip</Link>
            <Link href="/componentes#popover" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Popover</Link>
            <Link href="/componentes#dropdown" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Dropdown</Link>
            <Link href="/componentes#dropdown2" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Dropdown2</Link>
            <Link href="/componentes#drawer" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Drawer</Link>
            <Link href="/componentes#modal" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Modal</Link>


            <div className="font-bold mt-4">ESTRUCTURA y MENÚS</div>
            <Link href="/componentes#menulink" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">MenuLink</Link>
            <Link href="/componentes#mainmenu" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">MainMenu</Link>
            <Link href="/componentes#sidebar" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Sidebar</Link>
            <Link href="/componentes#layout" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Layout</Link>


            <div className="font-bold mt-4">CLICKables  </div>
            <Link href="/componentes#button" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Button</Link>
            <Link href="/componentes#switch" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Switch</Link>


            <div className="font-bold mt-4"> FORMULARIOS </div>
            <Link href="/componentes#inputtext" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">InputText</Link>
            <Link href="/componentes#inputnumber" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">InputNumber</Link>
            <Link href="/componentes#inputrange" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">InputRange</Link>
            <Link href="/componentes#inputdate" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">InputDate</Link>
            <Link href="/componentes#inputimage" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">InputImage</Link>
            <Link href="/componentes#inputcheck" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">InputCheck</Link>
            <Link href="/componentes#inputcheckmultiple" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">InputCheck multiple</Link>
            <Link href="/componentes#inputgroup" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">InputGroup</Link>
            <Link href="/componentes#inputgroupmultiple" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">InputGroup multiple</Link>
            <Link href="/componentes#inputselect" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">InputSelect</Link>
            <Link href="/componentes#inputselectmultiple" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">InputSelect multiple</Link>
            <Link href="/componentes#inputarea" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">InputArea</Link>
            <Link href="/componentes#submit" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Submit</Link>
            <Link href="/componentes#form" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Form</Link>


            <div className="font-bold mt-4"> LISTADOS </div>
            <Link href="/componentes#table" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Table</Link>
            <Link href="/componentes#list" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">List</Link>
            <Link href="/componentes#card" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Card</Link>
            <Link href="/componentes#list2" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">List2</Link>
            <Link href="/componentes#card2" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Card2</Link>


            <div className="font-bold mt-4"> OTROS </div>
            <Link href="/componentes#iconos" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">Icons</Link>
            <Link href="/componentes#draganddrop" className="md:px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">DragAndDrop</Link>
        </div>

    )
}