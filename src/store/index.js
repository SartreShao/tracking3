import { ref, provide } from "vue";

const mid = Symbol();
const uid = Symbol();
const session_id = Symbol();

function useProvider() {
  provide(mid, ref(""));
  provide(uid, ref(""));
  provide(session_id, ref(""));
}

export default {
  useProvider,
  mid,
  uid,
  session_id
};
