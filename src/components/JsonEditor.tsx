import * as React from 'react';

import { Attribute } from 'components/Attribute';

import './JsonEditor.scss';

export interface JsonEditorProps {
    formatSpaces?: number;
    style?: React.CSSProperties;
}

export interface JsonEditorState {
    currentJson: object;
}

export class JsonEditor extends React.PureComponent<JsonEditorProps, JsonEditorState> {
    constructor(props:JsonEditorProps) {
        super(props);
        this.state = {
            currentJson: {}
        };
    }

    addAttribute() {
        
    }

    private formatJson(json:JsonEditorState['currentJson']) {
        return JSON.stringify(json, null, this.props.formatSpaces || 2);
    }

    public render() {
        return (
            <div className='react-json-editor'>
                <div className='json-output'>
                    { this.formatJson(this.state.currentJson) }
                </div>
                <div className='json-blocks'>
                    { this.formatJson(this.state.currentJson) }
                    <div className='attribute add-json' onClick={ e => this.addAttribute() }>
                        Add Attribute
                    </div>
                </div>
            </div>
        );
    }
}