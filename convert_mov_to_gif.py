from moviepy import editor


def convert_mov_to_gif(input_file, output_file, fps=10):
    """
    Convert a .mov file to a .gif file using moviepy.

    Parameters:
    input_file (str): Path to the input .mov file.
    output_file (str): Path to the output .gif file.
    """
    # Load the .mov file
    clip = editor.VideoFileClip(input_file)

    # Write the video clip to a .gif file
    clip.write_gif(output_file, fps=fps)


if __name__ == "__main__":
    import os
    from pathlib import Path
    import shutil

    # Clean up previous output files
    output_dir = Path("MD_movie")

    for gif_file in output_dir.glob("*.gif"):
        if gif_file.exists():
            # delete the existing gif file
            gif_file.unlink()

    for movie_file in output_dir.glob("*.mov"):
        output_file = (
            os.path.splitext(movie_file.absolute())[0] + ".gif"
        )  # Output .gif file path
        fps = 10
        convert_mov_to_gif(str(movie_file), output_file, fps=fps)
