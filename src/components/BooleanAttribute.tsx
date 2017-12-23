import * as React from 'react';

import { Attribute } from './Attribute';

export interface BooleanAttributeProps {
    key: string;
    value: boolean;
    isEnding: boolean;
}

export class BooleanAttribute extends Attribute<BooleanAttributeProps> {
    constructor(props:BooleanAttributeProps) {
        super(props);
    }

    public renderAttribute() {
        return (
            <div className='rjs-boolean-attribute'>
                <span className='rjs-key-token'>{ `"${this.props.key}"` }</span>
                <span className='rjs-colon-token'>:</span>
                <span className='rjs-value-token'>{ `${this.props.value} ${this.props.isEnding ? '' : ','} `}</span>
            </div>
        )
    }
}