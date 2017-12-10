import * as React from 'react';
import { MouseEvent } from 'react';

import { Attribute } from 'components/Attribute';
import { Nullable } from 'utils';

import './JsonEditor.scss';


export interface JsonEditorProps {
    formatSpaces?: number;
    onSave?: (json: Nullable<object>, e?: React.MouseEvent<HTMLElement>) => void;
    saveText?: string;
    style?: object;
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
            <div className='react-json-editor' style={ this.props.style || {} }>
                <div className='json-output'>
                    { this.formatJson(this.state.currentJson) }
                </div>
                <div className='json-blocks-wrapper'>
                    <div className='json-blocks'>
                        { this.formatJson(this.state.currentJson) }
                        <div className='attribute add-json' onClick={ e => this.addAttribute() }>
                            Add Attribute
                        </div>
                    </div>
                    <div className='json-blocks-buttons'>
                        <button className='json-blocks-buttons' onClick={ e => this.props.onSave(this.state.currentJson, e) }>
                            { this.props.saveText || 'Save' }
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}