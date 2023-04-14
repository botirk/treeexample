import React, { Children, useState } from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const Message = (props: React.PropsWithChildren<{}>) => {
    const children = Children.toArray(props.children);
    const hasChild = children.length > 0;

    const [isOpen, setOpen] = useState(false);

    if (hasChild) {
        if (isOpen) {
            return <div style={{ display: "flex", flexDirection:"column", gap: "5px" }}>
                <div className="btn btn-dark" onClick={() => setOpen(false)}>Сообщение</div>
                <div style={{ display: "flex", gap: "5px", flexDirection: "column", paddingLeft: "20px" }}>
                    {children}
                </div>
                
            </div>
        } else {
            return <div className="btn btn-dark" onClick={() => setOpen(true)}>Сообщение</div>;
        }
    } else {
        return <div className="btn btn-dark disabled">Сообщение</div>;
    }
}

const Tree = () => {
    return <div style={{ display: "flex", gap: "5px", flexDirection: "column", padding: "10px",  }}>
        <h2>Дерево</h2>
        <Message>
            <Message/>
            <Message>
                <Message/>
                <Message/>
                <Message/>
            </Message>
            <Message/>
        </Message>
        <Message/>
        <Message/>
        <Message/>
    </div>;
}


const domContainer = document.querySelector('#tree');
const root = ReactDOM.createRoot(domContainer);
root.render(<Tree/>);
