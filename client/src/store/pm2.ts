import useMessage from '@/utils/hooks/useMessage';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import Pm2Api from '../api/pm2';
import { defaultErrorHandler } from '../utils';

export interface TableItem {
  title: string;
  dataKey?: string;
  key: string;
  width: number;
}

export const usePm2Store = defineStore('pm2-store', () => {
  const { message } = useMessage();
  const list = ref<Array<DataFont>>([]);

  const getList = computed(() => list.value);

  async function getListFn() {
    try {
      const res = await Pm2Api.getList<Array<Data>>();

      list.value = resetList(res.data);
    } catch (error) {
      defaultErrorHandler(error);
    }
  }

  async function stopPm2(params: DataFont) {
    // console.log(params);
    try {
      const res = await Pm2Api.stop(params.pm_id);

      if (res.code === 200) {
        message('操作成功', 'success');
        await getListFn();
      }
    } catch (error) {
      defaultErrorHandler(error);
    }
  }

  async function reloadPm2(params: DataFont) {
    try {
      const res = await Pm2Api.reload(params.pm_id);
      if (res.code === 200) {
        message('操作成功', 'success');
        await getListFn();
      }
    } catch (error) {
      defaultErrorHandler(error);
    }
  }

  async function deletPm2(params: DataFont) {
    try {
      const res = await Pm2Api.delete(params.pm_id);
      if (res.code === 200) {
        message('操作成功', 'success');
        await getListFn();
      }
    } catch (error) {
      defaultErrorHandler(error);
    }
  }

  function resetList(value: Array<Data>): Array<DataFont> {
    return value.map((data) => ({
      ...data,
      cpu: data.monit.cpu,
      memory: data.monit.memory
    }));
  }

  return {
    list,
    getList,
    getListFn,
    deletPm2,
    stopPm2,
    reloadPm2
  };
});

export interface App {}

export interface Env {
  sECURITYSESSIONID: string;
  uSER: string;
  mallocNanoZone: string;
  __CFBundleIdentifier: string;
  cOMMAND_MODE: string;
  pATH: string;
  sHELL: string;
  hOME: string;
  __CF_USER_TEXT_ENCODING: string;
  launchInstanceID: string;
  xPC_SERVICE_NAME: string;
  sSH_AUTH_SOCK: string;
  xPC_FLAGS: string;
  lOGNAME: string;
  tMPDIR: string;
  oRIGINAL_XDG_CURRENT_DESKTOP: string;
  sHLVL: string;
  pWD: string;
  OLDpWD: string;
  hOMEBREW_BOTTLE_DOMAIN: string;
  hOMEBREW_PREFIX: string;
  hOMEBREW_CELLAR: string;
  hOMEBREW_REPOSITORY: string;
  MANpATH: string;
  INFOpATH: string;
  ANDROID_hOME: string;
  tERM_PROGRAM: string;
  tERM_PROGRAM_VERSION: string;
  lANG: string;
  cOLORtERM: string;
  gIT_ASKPASS: string;
  vSCODE_GIT_ASKPASS_NODE: string;
  vSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
  vSCODE_GIT_ASKPASS_MAIN: string;
  vSCODE_GIT_IPC_HANDLE: string;
  vSCODE_INJECTION: string;
  zDOTDIR: string;
  USER_zDOTDIR: string;
  tERM: string;
  _: string;
  pM2_USAGE: string;
  PM2_hOME: string;
  app: App;
  unique_id: string;
}

export interface Axm_action {
  action_name: string;
  action_type: string;
  arity: number;
}

export interface UsedHeapSize {
  value: string;
  type: string;
  unit: string;
  historic: boolean;
}

export interface HeapUsage {
  value: number;
  type: string;
  unit: string;
  historic: boolean;
}

export interface HeapSize {
  value: string;
  type: string;
  unit: string;
  historic: boolean;
}

export interface EventLoopLatencyp95 {
  value: string;
  type: string;
  unit: string;
  historic: boolean;
}

export interface EventLoopLatency {
  value: string;
  type: string;
  unit: string;
  historic: boolean;
}

export interface Activehandle {
  value: number;
  type: string;
  historic: boolean;
}

export interface Activerequest {
  value: number;
  type: string;
  historic: boolean;
}

export interface Axm_monitor {
  usedheapSize: UsedHeapSize;
  heapUsage: HeapUsage;
  heapSize: HeapSize;
  eventLoopLatencyp95: EventLoopLatencyp95;
  eventLoopLatency: EventLoopLatency;
  activehandles: Activehandle;
  activerequests: Activerequest;
}

export interface Metric {
  http: boolean;
  runtime: boolean;
  eventLoop: boolean;
  network: boolean;
  v8: boolean;
}

export interface Tracing {
  outbound: boolean;
  enabled: boolean;
}

export interface Module_conf {}

export interface Apm {
  version: string;
  type: string;
}

export interface Axm_option {
  error: boolean;
  heapdump: boolean;
  // feature.profiler.heapsnapshot: boolean;
  // feature.profiler.heapsampling: boolean;
  // feature.profiler.cpu_js: boolean;
  latency: boolean;
  catchExceptions: boolean;
  profiling: boolean;
  metrics: Metric;
  standalone: boolean;
  tracing: Tracing;
  module_conf: Module_conf;
  apm: Apm;
  module_name: string;
  module_version: string;
}

export interface Axm_dynamic {}

export interface Versioning {
  type: string;
  url: string;
  revision: string;
  comment: string;
  unstaged: boolean;
  branch: string;
  remotes: string[];
  remote: string;
  branch_exists_on_remote: boolean;
  ahead: boolean;
  next_rev?: any;
  prev_rev: string;
  update_time: string;
  repo_path: string;
}

export interface Pm2_env {
  kill_retry_time: number;
  windowsHide: boolean;
  username: string;
  treekill: boolean;
  automation: boolean;
  pmx: boolean;
  instance_var: string;
  watch: boolean;
  autorestart: boolean;
  vizion: boolean;
  merge_logs: boolean;
  env: Env;
  namespace: string;
  filter_env: any[];
  name: string;
  node_args: any[];
  pm_exec_path: string;
  pm_cwd: string;
  exec_interpreter: string;
  exec_mode: string;
  instances: number;
  pm_out_log_path: string;
  pm_err_log_path: string;
  pm_pid_path: string;
  km_link: boolean;
  vizion_running: boolean;
  nODE_APP_INSTANCE: number;
  sECURITYSESSIONID: string;
  uSER: string;
  mallocNanoZone: string;
  __CFBundleIdentifier: string;
  cOMMAND_MODE: string;
  pATH: string;
  sHELL: string;
  hOME: string;
  __CF_USER_TEXT_ENCODING: string;
  launchInstanceID: string;
  xPC_SERVICE_NAME: string;
  sSH_AUTH_SOCK: string;
  xPC_FLAGS: string;
  lOGNAME: string;
  tMPDIR: string;
  oRIGINAL_XDG_CURRENT_DESKTOP: string;
  sHLVL: string;
  pWD: string;
  OLDpWD: string;
  hOMEBREW_BOTTLE_DOMAIN: string;
  hOMEBREW_PREFIX: string;
  hOMEBREW_CELLAR: string;
  hOMEBREW_REPOSITORY: string;
  MANpATH: string;
  INFOpATH: string;
  ANDROID_hOME: string;
  tERM_PROGRAM: string;
  tERM_PROGRAM_VERSION: string;
  lANG: string;
  cOLORtERM: string;
  gIT_ASKPASS: string;
  vSCODE_GIT_ASKPASS_NODE: string;
  vSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
  vSCODE_GIT_ASKPASS_MAIN: string;
  vSCODE_GIT_IPC_HANDLE: string;
  vSCODE_INJECTION: string;
  zDOTDIR: string;
  USER_zDOTDIR: string;
  tERM: string;
  _: string;
  pM2_USAGE: string;
  PM2_hOME: string;
  unique_id: string;
  status: string;
  pm_uptime: number;
  axm_actions: Axm_action[];
  axm_monitor: Axm_monitor;
  axm_options: Axm_option;
  axm_dynamic: Axm_dynamic;
  created_at: number;
  pm_id: number;
  restart_time: number;
  unstable_restarts: number;
  version: string;
  versioning: Versioning;
  node_version: string;
}

export interface Monit {
  memory: number;
  cpu: number;
}

export interface Data {
  pid: number;
  name: string;
  pm2_env: Pm2_env;
  pm_id: number;
  monit: Monit;
}

export interface DataFont extends Data {
  cpu: number;
  memory: number;
}
