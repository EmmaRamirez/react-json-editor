import * as React from 'react';

import { Attribute } from 'components/Attribute';
import { Nullable } from 'utils';

import './JsonEditor.scss';
import { BooleanAttribute } from 'components/BooleanAttribute';


export interface JsonEditorProps {
    formatSpaces?: number;
    onSave?: (json: Nullable<object>, e?: React.MouseEvent<HTMLElement>) => void;
    saveText?: string;
    style?: object;
}

export interface JsonEditorState {
    currentJson: object;
}

export enum JsonTypes {
    Array,
    Boolean,
    Object,
    String
}

export const findType = (target: any):JsonTypes => {
    if (Array.isArray(target)) return JsonTypes.Array;
    if (target.toString() === 'true' || target.toString() === 'false') return JsonTypes.Boolean;
    return JsonTypes.String;
}

export class JsonEditor extends React.PureComponent<JsonEditorProps, JsonEditorState> {
    constructor(props:JsonEditorProps) {
        super(props);
        this.state = {
            currentJson: {}
        };
    }

    private addAttribute = (e:React.MouseEvent<HTMLDivElement>) => {
        
    }

    private formatJson(json:JsonEditorState['currentJson']) {
        return JSON.stringify(json, null, this.props.formatSpaces || 2);
    }

    private formatJsonToBlocks(json:JsonEditorState['currentJson']):React.ReactNode {
        return Object.keys(json).map((key, index) => {
            const typeOf = findType((json as any)[key]);
            switch (typeOf) {
                case JsonTypes.Boolean:
                    return <BooleanAttribute key={key} value={(json as any)[key]} isEnding={Object.keys(json).length === (index + 1)} />
                default:
                    return <div />
            } 
        });
    }

    public render() {
        return (
            <div className='rjs-editor' style={ this.props.style || {} }>
                <div className='rjs-output'>
                    { this.formatJson(this.state.currentJson) }
                </div>
                <div className='rjs-blocks-wrapper'>
                    <div className='rjs-blocks'>
                        { this.formatJsonToBlocks(this.state.currentJson) }
                        <div className='rjs-attribute rjs-add-json' onClick={ this.addAttribute }>
                            Add Attribute
                        </div>
                    </div>
                    <div className='rjs-blocks-buttons'>
                        <button className='rjs-blocks-buttons' onClick={ e => this.props.onSave == null ? null : this.props.onSave(this.state.currentJson, e) }>
                            { this.props.saveText || 'Save' }
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}