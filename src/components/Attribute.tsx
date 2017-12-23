import * as React from 'react';

export interface AttributeProps {
    
}

export abstract class Attribute<T> extends React.PureComponent<T & AttributeProps> {
    constructor(props:T & AttributeProps) {
        super(props);
    }

    public abstract renderAttribute():React.ReactNode;

    public render() {
        return <div>{ this.renderAttribute() }</div>
    }
}