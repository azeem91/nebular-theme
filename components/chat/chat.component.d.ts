/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { NbChatMessageComponent } from './chat-message.component';
/**
 * Conversational UI collection - a set of components for chat-like UI construction.
 *
 * Main features:
 * - different message types support (text, image, file, file group, map, etc)
 * - drag & drop for images and files with preview
 * - different UI styles
 * - custom action buttons (coming soon)
 *
 * Here's a complete example build in a bot-like app. Type `help` to be able to receive different message types.
 * Enjoy the conversation and the beautiful UI.
 * @stacked-example(Showcase, chat/chat-showcase.component)
 *
 * Basic chat configuration and usage:
 * ```ts
 * <nb-chat title="Nebular Conversational UI">
 *       <nb-chat-message *ngFor="let msg of messages"
 *                        [type]="msg.type"
 *                        [message]="msg.text"
 *                        [reply]="msg.reply"
 *                        [sender]="msg.user.name"
 *                        [date]="msg.date"
 *                        [files]="msg.files"
 *                        [quote]="msg.quote"
 *                        [latitude]="msg.latitude"
 *                        [longitude]="msg.longitude"
 *                        [avatar]="msg.user.avatar">
 *   </nb-chat-message>
 *
 *   <nb-chat-form (send)="sendMessage($event)" [dropFiles]="true">
 *   </nb-chat-form>
 * </nb-chat>
 * ```
 * ### Installation
 *
 * Import `NbChatModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbChatModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * If you need to provide an API key for a `map` message type (which is required by Google Maps)
 * you may use `NbChatModule.forRoot({ ... })` call if this is a global app configuration
 * or `NbChatModule.forChild({ ... })` for a feature module configuration:
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
 *   ],
 * })
 * export class AppModule { }
 *
 * ### Usage
 *
 * There are three main components:
 * ```ts
 * <nb-chat>
 * </nb-chat> // chat container
 *
 * <nb-chat-form>
 * </nb-chat-form> // chat form with drag&drop files feature
 *
 * <nb-chat-message>
 * </nb-chat-message> // chat message, available multiple types
 * ```
 *
 * Two users conversation showcase:
 * @stacked-example(Conversation, chat/chat-conversation-showcase.component)
 *
 * Chat UI is also available in different colors by specifying a `[status]` input:
 *
 * @stacked-example(Colored Chat, chat/chat-colors.component)
 *
 * Also it is possible to configure sizes through `[size]` input:
 *
 * @stacked-example(Chat Sizes, chat/chat-sizes.component)
 *
 * @styles
 *
 * chat-font-size:
 * chat-fg:
 * chat-bg:
 * chat-border-radius:
 * chat-fg-text:
 * chat-height-xxsmall:
 * chat-height-xsmall:
 * chat-height-small:
 * chat-height-medium:
 * chat-height-large:
 * chat-height-xlarge:
 * chat-height-xxlarge:
 * chat-border:
 * chat-padding:
 * chat-shadow:
 * chat-separator:
 * chat-active-bg:
 * chat-disabled-bg:
 * chat-disabled-fg:
 * chat-primary-bg:
 * chat-info-bg:
 * chat-success-bg:
 * chat-warning-bg:
 * chat-danger-bg:
 */
export declare class NbChatComponent implements AfterViewInit {
    static readonly SIZE_XXSMALL = "xxsmall";
    static readonly SIZE_XSMALL = "xsmall";
    static readonly SIZE_SMALL = "small";
    static readonly SIZE_MEDIUM = "medium";
    static readonly SIZE_LARGE = "large";
    static readonly SIZE_XLARGE = "xlarge";
    static readonly SIZE_XXLARGE = "xxlarge";
    static readonly STATUS_ACTIVE = "active";
    static readonly STATUS_DISABLED = "disabled";
    static readonly STATUS_PRIMARY = "primary";
    static readonly STATUS_INFO = "info";
    static readonly STATUS_SUCCESS = "success";
    static readonly STATUS_WARNING = "warning";
    static readonly STATUS_DANGER = "danger";
    size: string;
    status: string;
    accent: string;
    scrollBottom: boolean;
    title: string;
    readonly xxsmall: boolean;
    readonly xsmall: boolean;
    readonly small: boolean;
    readonly medium: boolean;
    readonly large: boolean;
    readonly xlarge: boolean;
    readonly xxlarge: boolean;
    readonly active: boolean;
    readonly disabled: boolean;
    readonly primary: boolean;
    readonly info: boolean;
    readonly success: boolean;
    readonly warning: boolean;
    readonly danger: boolean;
    readonly hasAccent: string;
    /**
     * Chat size, available sizes:
     * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
     * @param {string} val
     */
    private setSize;
    /**
     * Chat status color (adds specific styles):
     * active, disabled, primary, info, success, warning, danger
     * @param {string} val
     */
    private setStatus;
    /**
     * Scroll chat to the bottom of the list when a new message arrives
     * @param {boolean} val
     */
    private setScrollBottom;
    scrollable: ElementRef;
    messages: QueryList<NbChatMessageComponent>;
    ngAfterViewInit(): void;
    updateView(): void;
    scrollListBottom(): void;
}
