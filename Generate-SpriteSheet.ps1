param (
    [Parameter(Mandatory=$true)] $SpriteSheetPath, # = "C:\Users\Stanley\Documents\Kalmany_Stack\calvinfring22\public\images\sprites\vampire\senior\data.png"
    [Parameter(Mandatory=$false)]$FrameName = "idle",
    [Parameter(Mandatory=$true)]$SpriteType

)

$Image = Get-Item $SpriteSheetPath
$SpriteSheetFolder = Split-Path $SpriteSheetPath
$SpriteSheetFile = Split-Path $SpriteSheetPath -Leaf
$SpriteSheetFileName = $Image.BaseName


add-type -AssemblyName System.Drawing
$Image = New-Object System.Drawing.Bitmap $SpriteSheetPath

$ImageHeight = $Image.Height
$ImageWidth = $Image.Width


$NumberOfFrames = [Math]::Floor($ImageWidth / $ImageHeight)
$Cursor = 0
$FrameList = @()
$Animations = @{}
$Frames = [ordered]@{}

$Animations.$FrameName = @()

foreach($Frame in @(0..($NumberOfFrames-1)))
{
    $FrameTrueName = "$($FrameName)_$($SpriteType)_$($SpriteSheetFileName)_$('{0:d2}' -f $Frame).png"

    $Frames.$FrameTrueName = @{
	    frame = @{
            x = $($Cursor)
            y = 0
            w = $($ImageHeight)
            h = $($ImageHeight)
         }
	    rotated = $false
	    trimmed = $false
	    spriteSourceSize = @{
            x = $($Cursor)
            y = 0
            w = $($ImageHeight)
            h = $($ImageHeight)
        }
	    sourceSize = @{
            w = $($ImageHeight)
            h = $($ImageHeight)
        }
    }

    $Cursor += $ImageHeight

    $Animations.$FrameName += $FrameTrueName

}

$Output = @{
    frames = $Frames
    animations = $Animations
    meta = @{
        version = "1.0"
        image = $SpriteSheetFile
        format = "RGBA8888"
        size = @{
            w = $ImageWidth
            h = $ImageHeight
        }
        scale = "1"
    }
}

$Output | Convertto-json -Depth 5 | out-file ($SpriteSheetFolder + "\" + $SpriteSheetFileName + ".json") -Encoding utf8
