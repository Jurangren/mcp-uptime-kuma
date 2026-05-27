import { Socket } from 'socket.io-client';
import type { LoggingLevel } from '@modelcontextprotocol/sdk/types.js';
import type { MonitorBaseWithExtendedData, MonitorWithExtendedData, ApiResponse, LoginResponse, MonitorList, MonitorSummary, Heartbeat, GetSettingsResponse, Notification, Maintenance, StatusPage } from './types/index.js';
/**
 * Uptime Kuma Socket.io API Client
 */
export declare class UptimeKumaClient {
    private socket;
    private url;
    private monitorListCache;
    private heartbeatListCache;
    private uptimeCache;
    private avgPingCache;
    private notificationListCache;
    private tagListCache;
    private maintenanceListCache;
    private statusPageListCache;
    private server?;
    private shouldLog;
    private loginCredentials;
    constructor(url: string, server?: {
        sendLoggingMessage: (params: {
            level: LoggingLevel;
            data: unknown;
        }) => Promise<void>;
    }, shouldLog?: (level: LoggingLevel) => boolean);
    /**
     * Helper to safely log messages - only logs if server is available, connected, and level is enabled
     */
    private safeLog;
    /**
     * Connect to the Uptime Kuma server
     */
    connect(): Promise<void>;
    /**
     * Re-authenticate after a reconnection to refresh all cached data.
     * When the server restarts or the connection drops, Socket.IO reconnects
     * the transport but the server no longer considers the client authenticated.
     * Without re-emitting login, the server won't send monitorList or heartbeat
     * events, leaving the cache permanently stale.
     */
    private reauthenticate;
    /**
     * Disconnect from the Uptime Kuma server
     */
    disconnect(): void;
    /**
     * Login using username and password, or JWT token
     *
     * @param username - Username (can be empty string)
     * @param password - Password/API key
     * @param token - Optional 2FA token if required
     * @param jwtToken - Optional JWT token for token-based authentication
     * @returns Promise resolving to the login response
     */
    login(username: string | undefined, password: string | undefined, token?: string, jwtToken?: string): Promise<LoginResponse>;
    getSettings(): Promise<GetSettingsResponse>;
    /**
     * Pause a monitor
     *
     * @param monitorID - The ID of the monitor to pause
     * @returns Promise resolving to the API response
     */
    pauseMonitor(monitorID: number): Promise<ApiResponse>;
    /**
     * Resume a monitor
     *
     * @param monitorID - The ID of the monitor to resume
     * @returns Promise resolving to the API response
     */
    resumeMonitor(monitorID: number): Promise<ApiResponse>;
    /**
     * Set up event listeners for monitor list updates
     * These listeners keep the cached monitor list in sync with the server
     */
    private setupMonitorListListeners;
    /**
     * Set up event listeners for heartbeat updates
     * These listeners keep the cached heartbeat list in sync with the server
     */
    private setupHeartbeatListeners;
    /**
     * Set up event listeners for uptime updates
     * These listeners keep the cached uptime data in sync with the server
     */
    private setupUptimeListeners;
    /**
     * Set up event listeners for average ping updates
     * These listeners keep the cached average ping data in sync with the server
     */
    private setupAvgPingListeners;
    /**
     * Get a specific monitor by ID from the cache
     *
     * @param monitorID - The ID of the monitor to retrieve
     * @param includeTypeSpecificFields - If true, returns MonitorWithExtendedData with type-specific fields. If false, returns only MonitorBaseWithExtendedData (common fields + runtime data).
     * @returns The monitor data, or undefined if not found
     */
    getMonitor<T extends boolean = true>(monitorID: number, includeTypeSpecificFields?: T): T extends true ? MonitorWithExtendedData | undefined : MonitorBaseWithExtendedData | undefined;
    /**
     * Get the cached full list of monitors the user has access to
     * The list is populated after login and kept up-to-date via server events
     *
     * @param filters - Optional filter criteria
     * @returns The cached monitor list
     */
    getMonitorList<T extends boolean = true>(filters?: {
        keywords?: string;
        type?: string;
        active?: boolean;
        maintenance?: boolean;
        tags?: string;
        includeTypeSpecificFields?: T;
    }): MonitorList<T>;
    /**
     * Get the cached heartbeat list
     * The list is populated after login and kept up-to-date via server events
     *
     * @param maxHeartbeats - Maximum number of heartbeats to return per monitor (default: 1)
     * @returns The cached heartbeat list with arrays of heartbeats
     */
    getHeartbeatList(maxHeartbeats?: number): {
        [monitorID: string]: Heartbeat[];
    };
    /**
     * Get heartbeats for a specific monitor from the cache
     *
     * @param monitorID - The ID of the monitor
     * @param maxHeartbeats - Maximum number of heartbeats to return (default: 1)
     * @returns Array of heartbeats for the monitor, or empty array if none exist
     */
    getHeartbeatsForMonitor(monitorID: number, maxHeartbeats?: number): Heartbeat[];
    /**
     * Get a summarized list of all monitors with their most recent heartbeat status
     *
     * @param filters - Optional filter criteria
     * @returns Array of monitor summaries containing essential info and latest heartbeat status
     */
    getMonitorSummary(filters?: {
        keywords?: string;
        type?: string;
        active?: boolean;
        maintenance?: boolean;
        tags?: string;
        status?: string;
    }): MonitorSummary[];
    private setupNotificationListListeners;
    private setupTagListListeners;
    private setupMaintenanceListListeners;
    private setupStatusPageListListeners;
    /**
     * Create a new monitor
     *
     * @param monitorData - Monitor configuration (type-specific fields should be included)
     * @returns Promise resolving to the API response with the new monitorID
     */
    createMonitor(monitorData: Record<string, unknown>): Promise<ApiResponse & {
        monitorID?: number;
    }>;
    /**
     * Update an existing monitor
     *
     * @param monitorData - Monitor configuration including the id field
     * @returns Promise resolving to the API response
     */
    updateMonitor(monitorData: Record<string, unknown>): Promise<ApiResponse & {
        monitorID?: number;
    }>;
    /**
     * Delete a monitor
     *
     * @param monitorID - The ID of the monitor to delete
     * @returns Promise resolving to the API response
     */
    deleteMonitor(monitorID: number): Promise<ApiResponse>;
    /**
     * Get the cached notification list
     */
    getNotificationList(): Notification[];
    /**
     * Add or update a notification channel
     *
     * @param notification - Notification configuration
     * @param notificationID - If provided, updates existing; otherwise creates new
     * @returns Promise resolving to the API response with the notification id
     */
    addNotification(notification: Record<string, unknown>, notificationID?: number): Promise<ApiResponse & {
        id?: number;
    }>;
    /**
     * Delete a notification channel
     *
     * @param notificationID - The ID of the notification to delete
     * @returns Promise resolving to the API response
     */
    deleteNotification(notificationID: number): Promise<ApiResponse>;
    /**
     * Get the cached tag list
     */
    getTagList(): Array<{
        id: number;
        name: string;
        color: string;
    }>;
    /**
     * Create a new tag
     *
     * @param name - Tag name
     * @param color - Tag color (hex string, e.g. '#ff0000')
     * @returns Promise resolving to the created tag object
     */
    addTag(name: string, color: string): Promise<ApiResponse & {
        tag?: {
            id: number;
            name: string;
            color: string;
        };
    }>;
    /**
     * Delete a tag
     *
     * @param tagID - The ID of the tag to delete
     * @returns Promise resolving to the API response
     */
    deleteTag(tagID: number): Promise<ApiResponse>;
    /**
     * Get the cached maintenance window list
     */
    getMaintenanceList(): Maintenance[];
    /**
     * Create a new maintenance window
     *
     * @param maintenanceData - Maintenance window configuration
     * @returns Promise resolving to the API response with the maintenance ID
     */
    createMaintenance(maintenanceData: Record<string, unknown>): Promise<ApiResponse & {
        maintenanceID?: number;
    }>;
    /**
     * Get the cached status page list
     */
    getStatusPageList(): StatusPage[];
    /**
     * Get the socket instance (for advanced usage)
     */
    getSocket(): Socket | null;
}
//# sourceMappingURL=uptime-kuma-client.d.ts.map