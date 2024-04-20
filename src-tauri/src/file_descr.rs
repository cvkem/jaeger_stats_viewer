use super::backend::STITCHED;
use jaeger_stats::{self, types::Table, Viewer};
use log::{error, info};

#[tauri::command]
pub fn get_file_stats() -> Option<Table> {
    info!("BACKEND: get_file_stats()");

    let guard = STITCHED.lock().unwrap();
    match &*guard {
        Some(sd) => Some(sd.get_file_stats()),
        None => {
            error!("No stitched data loaded");
            None
        }
    }
}
